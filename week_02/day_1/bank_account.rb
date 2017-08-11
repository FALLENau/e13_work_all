#Bank account Functions week2/day1#

class BankAccount
  attr_accessor :holder_name, :amount, :type

  def initialize(holder_name, amount, type)
    @holder_name = holder_name
    @amount = amount
    @type = type
  end

  def pay_in(value)
    @amount += (value)

  end

  def pay_monthly_fee

    if (@type == "personal")
      @amount -= (10)
    else
      @amount -= (50)
    end
    
    #Sandy's Example.
    # @amount -= 10 if (@type == "personal")
    # @amount -= 50 if (@type == "business")

  end
end
