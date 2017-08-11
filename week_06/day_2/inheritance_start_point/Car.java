class Car extends Vehicle { //Car class inheritance from Vehicle

  public Car(int numWheels) {
      super(numWheels);
  }

  public String startEngine() {
    return super.startEngine() + " I'm a car!";
  }

  public String drive() {
    return "use streering wheel";
  }
}
