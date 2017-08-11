abstract class Vehicle {
  protected int numWheels;
  //"protected" lets inhereted file have acces but only inhereted files.

  public Vehicle(int numWheels){
    this.numWheels = numWheels;
  }

  public int getNumWheels(){
    return this.numWheels;
  }

  public String startEngine() {
    return "Vrrrm!";
  }

  public abstract String drive();

}
