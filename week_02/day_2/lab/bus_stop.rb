class BusStop
  attr_reader :queue

  def initialize(stop_name)
    @stop_name = stop_name
    @queue = []

  end  

  def queue_size
    return @queue.count
  end 

  def add_person_queue(person)
    @queue.push(person)

  end

  def get_queue_from_stop()
    return @queue
    
  end

  def clear_queue
    @queue.clear
  end


end  