require('minitest/autorun')
require("minitest/rg")
require_relative("../bus_stop")
require_relative("../person")

class TestBusStop < MiniTest::Test

  def setup
    @stop_01 = BusStop.new("Lothian")
    @person = Person.new("Ross", 30)
  
  end


  def test_add_person_to_queue
    @stop_01.add_person_queue(@person)
    assert_equal(1, @stop_01.queue_size)
  end


  def test_gets_queue
    @stop_01.add_person_queue(@person)
    
    assert_equal(1, @stop_01.get_queue.count)
  end




end  