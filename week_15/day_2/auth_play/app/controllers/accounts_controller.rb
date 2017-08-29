class AccountsController < ApplicationController

  http_basic_authenticate_with name: "Billy", password: "1234567890"

  def index
    accounts = [
      { name: 'offshore', amount: 10000.00},
      { name: 'local', amount: 0.10}
    ]
    render :json => accounts
  end
end
