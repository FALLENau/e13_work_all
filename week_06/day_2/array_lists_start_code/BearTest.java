import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import org.junit.*;

public class BearTest{
  Bear bear;
  Salmon salmon;
  Human human;
  Chicken chicken;
  // Rock rock;

  @Before
  public void before() {
    bear = new Bear("Baloo");
    salmon = new Salmon();
    human = new Human();
    chicken = new Chicken();
    // rock = new Rock();
  }

  @Test
  public void hasName(){
    assertEquals("Baloo", bear.getName());
  }

  @Test //Note:start-build stage one.
  public void canEatSalmon(){
    bear.eat(salmon);
    assertEquals(1, bear.foodCount());
  }

  @Test
  public void bellyStartsEmpty(){
    assertEquals(0, bear.foodCount());
  }

  @Test
  public void canThrowUp() {
    bear.eat(salmon);
    Edible food = bear.throwUp();
    assertEquals("glup glup swimming", food.swim());
    // assertNotNull(food);
  }

  @Test
  public void canEatChicken() {
    bear.eat(chicken);
    assertEquals(1, bear.foodCount());
  }

  @Test
  public void canChickenCluck() {
    assertEquals("cluck cluck BUGAAARG", chicken.cluck());
  }


  @Test
  public void canThrowUpChickenAndCluck() {
    bear.eat(chicken);
    Edible food = bear.throwUp();
    Chicken chicken = (Chicken) food;
    assertEquals("cluck cluck BUGAAARG", chicken.cluck());
    // assertNotNull(food);
  }

  @Test
  public void doesEdibleHaveNutritionValue() {
    assertEquals(4, chicken.nutritionValue());
  }

  @Test
  public void totalBearNutritionValue() {
    bear.eat(chicken);
    bear.eat(salmon);
    bear.eat(human);
    assertEquals(23, bear.bearTotalFat());
  }


  // @Test
  // public void canEatHuman() {
  //   bear.eat(human);
  //   assertEquals(1, bear.foodCount());
  // }

  // @Test
  // public void bellyIsFull(){
  //   for(int i = 0; i<5; i++){
  //     bear.eat(salmon);
  //   }
  //   assertEquals(bear.isBellyFull(), true);
  // }

  // @Test
  // public void canNotEatSalmonWhenBellyFull(){
  //   for(int i = 0; i<10; i++){
  //     bear.eat(salmon);
  //   }
  //   assertEquals(5, bear.foodCount());
  // }

  @Test
  public void shouldEmptyBellyAfterSleeping(){
    bear.eat(salmon);
    bear.sleep();
    assertEquals(0, bear.foodCount());
  }
}
