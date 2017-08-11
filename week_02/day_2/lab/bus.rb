class Bus
  def initialize(bus_number, bus_destination)
    @bus_number = bus_number
    @bus_destination = bus_destination
    @passengers = []
  end

  def bus_driving
    return "Broom broom"
  end

  def number_of_passengers
    return @passengers.count
  end

  def adding_passenger(person)
    @passengers.push(person)
  end

  def remove_passenger(person)
    @passengers.delete(person)
  end

  def remove_all_passengers()
    @passengers.clear
  end

  def get_queue(stop)
    for person in stop.queue
      adding_passenger(person)
    end
    stop.clear_queue
  end





end
