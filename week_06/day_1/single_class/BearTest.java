import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class BearTest {
  Bear bear;

  @Before
  public void before() {
    bear = new Bear("Baloo", 25, 95.62);
  }

  @Test
  public void hasName() {
    // Bear bear = new Bear("Baloo", 25); //Note:these bears exist under class title and within @before or @beforeEach
    assertEquals("Baloo", bear.getName());
  }

  @Test
  public void hasAge() {
    // Bear bear = new Bear("Baloo", 25);
    assertEquals(25, bear.getAge());
  }

  @Test
  public void hasWeight() {
    // Bear bear = new Bear("Baloo", 25, 95.62);
    assertEquals(95.62, bear.getWeight(), 0.01);
  }

  @Test
  public void readyToHibernateIfGreaterThan80() {
    assertEquals(true, bear.readyToHibernate());
  }

  @Test
  public void notReadyToHibernateIfLessThan80() {
    Bear thinBear = new Bear("baloo", 25, 65.44);
    assertEquals(false, thinBear.readyToHibernate());
  }

}
