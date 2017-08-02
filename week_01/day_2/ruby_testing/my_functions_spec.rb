require("minitest/autorun")
require_relative("my_functions.rb")

class MyFunctionsTest < MiniTest::Test

  def test_greet()
    expected = "Hey Reece"
    actual = greet("Reece")
    assert_equal(expected, actual)

  end

  def test_add()
    result = add(4, 5)
    assert_equal(9, result)

  end

end
