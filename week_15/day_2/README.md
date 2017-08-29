# Objectives - Authentication

1. Explain the need for Authentication
2. Recap HTTP Request/Response cycle
3. Describe that HTTP is stateless
4. Describe types of HTTP Authentication and their Disadvantages and Advantages
5. Basic HTTP Authentication
6. Session Authentication

<br>
## setup


blah blah install rails  ect

and get a page up
addd route
```ruby
Rails.application.routes.draw do

  get 'accounts' => 'accounts#index'
  # The priority is based upon order of
```

create AccountsController
```ruby
class AccountsController < ApplicationController
  def index
    accounts = [
      { name: 'offshore', amount: 10000.00},
      { name: 'local', amount: 0.10}
    ]
    render :json => accounts
  end
end
```
<br>
## first steps
in the main project folder find the [Gemfile](auth_play/Gemfile) and add the code below:

```ruby
source 'https://rubygems.org'

gem 'responders'
```

in terminal
```sh
bundle install
```


Once that is installed open [application_controller](auth_play/app/controllers/application_controller.rb) file and add this last line of code like this:
```ruby
protect_from_forgery with: :null_session
respond_to :json
end
```

Now go back to [accounts_controller](auth_play/app/controllers/accounts_controller.rb) file and add

```ruby
  http_basic_authenticate_with name: "Billy", password: "1234567890"
```
before the def index line
<br>

well done you know have Basic Authentication
Open insomina and make this get request with Basic Authentication

```ruby
Billy 1234567890
```
and see your results

<br>
## Next step - make login accounts

edit the [Gemfile](auth_play/Gemfile) again and add gem 'devise'
```ruby
source 'https://rubygems.org'

gem 'devise'

```
and run the install in terminal again
```sh
bundle install
```

install the new gem

```sh
rails generate devise:install
```

now make the users table
```sh
rails generate devise user
```
finally merge the new table
```sh
rake db:migrate
```

in your [accounts_controller](auth_play/app/controllers/accounts_controller.rb) add and hash out the code below
```ruby
class AccountsController < ApplicationController

  # http_basic_authenticate_with name: "Billy", password: "1234567890"
  before_action :authenticate_user!


  def index
```
and adjust in you [application_controller](auth_play/app/controllers/application_controller.rb) file
```ruby
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  respond_to :json, :html
end
```

Now go back to your [localhost:3000/accounts](http://localhost:3000/accounts) and signup/login!

<br>
## 3rd step - show only related accounts

add enription to your db
```sh
rails generate model Account name:text amount:decimal user:references
```
now merge your db

```sh
rake db:migrate
```

now open the new [user](auth_play/app/models/user.rb) rb file and add "has_many :accounts"
```ruby
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :accounts
end
```

and the [seeds](auth_play/db/seeds.rb) file and create a test for the new model
```ruby
User.destroy_all
Account.destroy_all

user_one = User.create!({
  email: 'billy@awesome.com',
  password: 'password',
  password_confirmation: 'password'
})

user_two = User.create!({
  email: 'james@awesome.com',
  password: 'password',
  password_confirmation: 'password'
})

user_one.accounts.create({
  name: 'local', amount: 101.01
})

user_two.accounts.create({
  name: 'local', amount: 1000.01
})

user_two.accounts.create({
  name: 'offshore', amount: 99999.01
})
```


now add the seeds
```sh
rake db:seed
```

and lastly open [accounts_controller](auth_play/app/controllers/accounts_controller.rb) and change def index to look like this

```ruby
class AccountsController < ApplicationController

  # http_basic_authenticate_with name: "Billy", password: "1234567890"
  before_action :authenticate_user!


  def index
    accounts = current_user.accounts
    render :json => accounts
  end
end

```

now login under one of the new account you made with the seeds file and see the details only for that user details! yay!



<br>
## front end Authentication meets backend
