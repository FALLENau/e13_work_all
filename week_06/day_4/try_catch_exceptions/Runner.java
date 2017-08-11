public class Runner {
  public static void main(String[] args) {
    int one = 1;
    int zero = 0;

  try {
    System.out.println(one / zero);
  } catch(ArithmeticException ex) {
    System.out.println("Error: " + ex.getMessage());
  }

    System.out.println("GOT HERE");

  }
}
