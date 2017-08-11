#Bank account Tests week2/day1#
require('minitest/autorun')
require("minitest/rg")
require_relative('./bank_account')


class TestBankAccount < MiniTest::Test

  def setup #Note: why does setup fix this test
    @bank_account = BankAccount.new("Jarrod", 500, "business")
    @bank_account2 = BankAccount.new("Glen", 2000, "criminal")
    @bank_account3 = BankAccount.new("Reece", 100, "personal")
    assert_equal("Jarrod", @bank_account.holder_name)
  end

  def test_amount
    assert_equal(2000, @bank_account2.amount)
  end

  def test_type
    assert_equal("criminal", @bank_account2.type)
  end

  def test_set_account_name
    @bank_account.holder_name=("Zsolt")
    assert_equal("Zsolt", @bank_account.holder_name)
  end

  def test_set_account_amount
    @bank_account.amount=(50)
    assert_equal(50, @bank_account.amount)
  end

  def set_account_type
    @bank_account.type=("personal")
    assert_equal("personal", @bank_account.type)
  end

  def test_pay_into_account
    @bank_account.pay_in(100)
    assert_equal(600, @bank_account.amount)
  end

  def test_monthly_fee_business
    @bank_account.pay_monthly_fee()
    assert_equal(450, @bank_account.amount)
  end

  def test_monthly_fee_personal
    @bank_account3.pay_monthly_fee()
    assert_equal(90, @bank_account3.amount)
  end


end
