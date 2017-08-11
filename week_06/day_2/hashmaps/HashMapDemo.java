import java.util.HashMap;

public class HashMapDemo {
  public static void main(String[] args) {
    HashMap<String, String> javaKnowledge = new HashMap<String, String>();

    javaKnowledge.put("Jarrod", "99%");
    javaKnowledge.put("Darren", "101%");

    System.out.println(javaKnowledge.get("Jarrod"));

    HashMap<String, Integer> ages = new HashMap<String, Integer>();

    ages.put("Alice", 53);
    ages.put("Bob", 24);

    Integer aliceAge = ages.get("Alice");

    String output = "Alice's ages is " + aliceAge.toString();
    System.out.println(output);
  }
}
