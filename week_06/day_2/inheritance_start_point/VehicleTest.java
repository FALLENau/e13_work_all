import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class VehicleTest {
  Car car;
  Motorbike motorbike;


  @Before
  public void before(){
    car = new Car(4);
    motorbike = new Motorbike(2);

  }

  @Test
  public void motorbikeHasTwoWheels() {
    assertEquals(2, motorbike.getNumWheels());
  }

  @Test
  public void testCarCanStartEngine() {
    assertEquals("Vrrrm! I'm a car!", car.startEngine());
  }

  @Test
  public void testMotorbikeCanStartEngine() {
    assertEquals("Vrrrm!", motorbike.startEngine());
  }

  @Test
  public void testCarCanDrive() {
    assertEquals("use streering wheel", car.drive());
  }

  @Test
  public void testMotorbikeCanDrive() {
    assertEquals("use handle bars", motorbike.drive());
  }

}
