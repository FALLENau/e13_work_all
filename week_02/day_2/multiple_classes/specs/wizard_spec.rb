require("minitest/autorun")
require("minitest/rg")
require_relative("../wand")
require_relative("../wizard")

class TestWyzard < MiniTest::Test

  def setup
    @elder_wand = Wand.new("holly", "pheonix feather")
    @harry = Wizard.new("Harry Potter", @elder_wand)

    @broken_wand = Wand.new("Oak", "Unicorn hair")
    @ron = Wizard.new("Ron Weasley", @broken_wand)

  end

  def test_wizard_has_name
    assert_equal("Ron Weasley", @ron.name)
  end

  def test_wizard_can_cast_spell
    assert_equal("wingardium leviosa", @ron.cast_spell("wingardium leviosa"))
  end

  def test_wizard_can_cast_spell__strong
    assert_equal("WINGARDIUM LEVIOSA", @harry.cast_spell("wingardium leviosa"))

  end

end
