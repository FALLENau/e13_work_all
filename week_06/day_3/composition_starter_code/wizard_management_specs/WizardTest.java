import static org.junit.Assert.*;
import org.junit.*;
import wizard_management.*;

public class WizardTest {

  Wizard wizard;
  Broomstick broomstick;

  @Before
  public void before(){
    broomstick = new Broomstick("Nimbus", 10);
    wizard = new Wizard("Toby", broomstick);
  }

  @Test
  public void hasName(){
    assertEquals("Toby", wizard.getName());
  }

  @Test
  public void hasBroomstick(){
    Broomstick ride = (Broomstick)wizard.getRide();
    assertEquals("Nimbus", ride.getBrand());
  }

  @Test
  public void canFly(){
    assertEquals("mounting broom, running, skipping, flying!", wizard.fly());
  }

  @Test
  public void canFlyDragon(){
    Dragon dragon = new Dragon("Tilly");
    wizard = new Wizard("Toby", dragon);
    assertEquals("Standing up tall, beating wings, lift off!", wizard.fly());
  }

  @Test
  public void canFlyMagicCarpet(){
    MagicCarpet carpet = new MagicCarpet("Magenta");
    wizard = new Wizard("Fabio", carpet);
    assertEquals("Hovering up, straightening out, flying off!", wizard.fly());
  }

  @Test
  public void canFlyOgre(){
    Ogre ogre = new Ogre("Sambo");
    wizard = new Wizard("Frisky", ogre);
    assertEquals("Hovering up, straightening out, stalling, stalling hard, fall flat on face!", wizard.fly());
  }

  @Test
  public void canSetRide(){
    Dragon dragon = new Dragon("Erik");
    wizard.setRide(dragon);
    assertEquals("Standing up tall, beating wings, lift off!", wizard.fly());
  }


}
