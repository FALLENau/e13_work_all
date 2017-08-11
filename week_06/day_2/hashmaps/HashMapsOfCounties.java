import java.util.HashMap;

public class HashMapsOfCounties {
  public static void main(String[] args) {
    HashMap<String, Integer> countiesData = new HashMap<String, Integer>();

    countiesData.put("UK", 64100000);
    countiesData.put("Germany", 80620000);
    countiesData.put("France", 66030000);
    countiesData.put("Japan", 127300000);

    Integer germanyData = countiesData.get("Germany");
    Integer franceData = countiesData.get("France");
    Integer ukData = countiesData.get("UK");
    Integer japanData = countiesData.get("Japan");

    System.out.println("The pop of Germany is " + germanyData.toString());
    System.out.println("The pop of France is " + franceData.toString());

    System.out.println(countiesData.values());

    System.out.println(countiesData.keySet());
  }
}
