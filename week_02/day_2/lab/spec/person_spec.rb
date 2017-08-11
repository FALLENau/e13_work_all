require('minitest/autorun')
require("minitest/rg")
require_relative("../person")

class TestPerson < Minitest::Test

  def setup
    @person = Person.new("Ross", 30)
  end

  def test_name
    assert_equal("Ross", @person.name)
  end

  def test_age
    assert_equal(30, @person.age)
  end



end
