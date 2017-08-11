require('minitest/autorun')
require("minitest/rg")
require_relative("../bus")
require_relative("../person")
require_relative("../bus_stop")

class TestBus < MiniTest::Test

  def setup
    @passenger01 = Person.new("ross", 30)
    @passenger02 = Person.new("steven", 25)
    @bus = Bus.new(22, "Ocean Terminal")
    @stop_01 = BusStop.new("Lothian")
  end

  def test_bus_driving
    assert_equal("Broom broom", @bus.bus_driving)
  end

  def test_number_of_passengers
    assert_equal(0, @bus.number_of_passengers)
  end

  def test_add_passengers
    @bus.adding_passenger(@passenger01)
    assert_equal(1, @bus.number_of_passengers)
  end

  def test_remove_passenger
    @bus.adding_passenger(@passenger01)
    @bus.adding_passenger(@passenger02)
    @bus.remove_passenger(@passenger02)
    assert_equal(1, @bus.number_of_passengers)
  end

  def test_empty_bus
    @bus.adding_passenger(@passenger01)
    @bus.remove_all_passengers
    assert_equal(0, @bus.number_of_passengers)
  end

  def test_pickup_all_passengers
    @stop_01.add_person_queue(@passenger02)
    @stop_01.add_person_queue(@passenger01)
    @bus.get_queue(@stop_01)
    assert_equal(0, @stop_01.queue_size)
    assert_equal(2, @bus.number_of_passengers)
  end



end
