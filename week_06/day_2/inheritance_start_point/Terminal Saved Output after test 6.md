Last login: Mon Jun 26 15:34:16 on ttys002
➜  ~ cd e13_work/week_06/day_01 
➜  day_01 git:(master) ls
README.md            java_intro           multiple_classes.zip
homework             multiple_classes     single_class
➜  day_01 git:(master) atom .
➜  day_01 git:(master) ..
➜  week_06 git:(master) ✗ cd day_02
➜  day_02 git:(master) ls
README.md                  array_lists_start_code.zip
array_lists_start_code
➜  day_02 git:(master) ✗ cd array_lists_start_code 
➜  array_lists_start_code git:(master) ✗ atom .
➜  array_lists_start_code git:(master) ✗ javac *.java
Bear.java:26: error: cannot find symbol
   return foodCount() == belly.length;
                              ^
  symbol:   variable length
  location: variable belly of type ArrayList<Salmon>
1 error
➜  array_lists_start_code git:(master) ✗ javac *.java
Bear.java:26: error: cannot find symbol
   return foodCount() == belly.length;
                              ^
  symbol:   variable length
  location: variable belly of type ArrayList<Salmon>
1 error
➜  array_lists_start_code git:(master) ✗ javac *.java
➜  array_lists_start_code git:(master) ✗ junit BearTest
JUnit version 4.12
....
Time: 0.008

OK (4 tests)

➜  array_lists_start_code git:(master) ✗ ..
➜  day_02 git:(master) ✗ git add .
➜  day_02 git:(master) ✗ git commit -m "startpoint java array"
[master dec5e97] startpoint java array
 7 files changed, 87 insertions(+)
 create mode 100644 array_lists_start_code.zip
 create mode 100644 array_lists_start_code/Bear.class
 create mode 100644 array_lists_start_code/Bear.java
 create mode 100644 array_lists_start_code/BearTest.class
 create mode 100644 array_lists_start_code/BearTest.java
 create mode 100644 array_lists_start_code/Salmon.class
 create mode 100644 array_lists_start_code/Salmon.java
➜  day_02 git:(master) git push
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (9/9), done.
Writing objects: 100% (10/10), 3.26 KiB | 0 bytes/s, done.
Total 10 (delta 0), reused 0 (delta 0)
To github.com:FALLENau/e13_homework_week_06_day_02.git
   1ad877f..dec5e97  master -> master
➜  day_02 git:(master) ls
README.md                   inheritance_start_point
array_lists_start_code      inheritance_start_point.zip
array_lists_start_code.zip
➜  day_02 git:(master) ✗ git add .
➜  day_02 git:(master) ✗ git commit -m "inheritance"
[master 8a951e9] inheritance
 5 files changed, 33 insertions(+)
 create mode 100644 inheritance_start_point.zip
 create mode 100644 inheritance_start_point/Car.java
 create mode 100644 inheritance_start_point/Motorbike.java
 create mode 100644 inheritance_start_point/Vehicle.java
 create mode 100644 inheritance_start_point/VehicleTest.java
➜  day_02 git:(master) git push 
Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 1.44 KiB | 0 bytes/s, done.
Total 8 (delta 0), reused 0 (delta 0)
cdTo github.com:FALLENau/e13_homework_week_06_day_02.git
   dec5e97..8a951e9  master -> master
➜  day_02 git:(master) cd inheritance_start_point 
➜  inheritance_start_point git:(master) atom .
➜  inheritance_start_point git:(master) ✗ javac *.java
Motorbike.java:4: error: numWheels has private access in Vehicle
    numWheels = 2;
    ^
1 error
➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest 
JUnit version 4.12
.E
Time: 0.005
There was 1 failure:
1) initializationError(VehicleTest)
java.lang.Exception: No runnable methods
	at org.junit.runners.BlockJUnit4ClassRunner.validateInstanceMethods(BlockJUnit4ClassRunner.java:191)
	at org.junit.runners.BlockJUnit4ClassRunner.collectInitializationErrors(BlockJUnit4ClassRunner.java:128)
	at org.junit.runners.ParentRunner.validate(ParentRunner.java:416)
	at org.junit.runners.ParentRunner.<init>(ParentRunner.java:84)
	at org.junit.runners.BlockJUnit4ClassRunner.<init>(BlockJUnit4ClassRunner.java:65)
	at org.junit.internal.builders.JUnit4Builder.runnerForClass(JUnit4Builder.java:10)
	at org.junit.runners.model.RunnerBuilder.safeRunnerForClass(RunnerBuilder.java:59)
	at org.junit.internal.builders.AllDefaultPossibilitiesBuilder.runnerForClass(AllDefaultPossibilitiesBuilder.java:26)
	at org.junit.runner.Computer.getRunner(Computer.java:40)
	at org.junit.runner.Computer$1.runnerForClass(Computer.java:31)
	at org.junit.runners.model.RunnerBuilder.safeRunnerForClass(RunnerBuilder.java:59)
	at org.junit.runners.model.RunnerBuilder.runners(RunnerBuilder.java:101)
	at org.junit.runners.model.RunnerBuilder.runners(RunnerBuilder.java:87)
	at org.junit.runners.Suite.<init>(Suite.java:81)
	at org.junit.runner.Computer.getSuite(Computer.java:28)
	at org.junit.runner.Request.classes(Request.java:75)
	at org.junit.runner.JUnitCommandLineParseResult.createRequest(JUnitCommandLineParseResult.java:118)
	at org.junit.runner.JUnitCore.runMain(JUnitCore.java:77)
	at org.junit.runner.JUnitCore.main(JUnitCore.java:36)

FAILURES!!!
Tests run: 1,  Failures: 1

➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest
JUnit version 4.12
.
Time: 0.006

OK (1 test)

➜  inheritance_start_point git:(master) ✗ git add .
➜  inheritance_start_point git:(master) ✗ git commit -m "test 1 pass"
[master 7e08481] test 1 pass
 7 files changed, 12 insertions(+), 5 deletions(-)
 create mode 100644 inheritance_start_point/Car.class
 create mode 100644 inheritance_start_point/Motorbike.class
 create mode 100644 inheritance_start_point/Vehicle.class
 create mode 100644 inheritance_start_point/VehicleTest.class
➜  inheritance_start_point git:(master) git push
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 1.82 KiB | 0 bytes/s, done.
Total 10 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:FALLENau/e13_homework_week_06_day_02.git
   8a951e9..7e08481  master -> master
➜  inheritance_start_point git:(master) javac *.java     
Vehicle.java:13: error: not a statement
    retrun "Vrrm!";
    ^
Vehicle.java:13: error: ';' expected
    retrun "Vrrm!";
          ^
2 errors
➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest 
JUnit version 4.12
...E
Time: 0.012
There was 1 failure:
1) testMotorbikeCanStartEngine(VehicleTest)
org.junit.ComparisonFailure: expected:<[Pur pur! I'm a mother funning Motorbike]> but was:<[Vrrm!]>
	at org.junit.Assert.assertEquals(Assert.java:115)
	at org.junit.Assert.assertEquals(Assert.java:144)
	at VehicleTest.testMotorbikeCanStartEngine(VehicleTest.java:27)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:50)
	at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
	at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:47)
	at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
	at org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)
	at org.junit.runners.ParentRunner.runLeaf(ParentRunner.java:325)
	at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:78)
	at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:57)
	at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
	at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
	at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
	at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
	at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.junit.runners.Suite.runChild(Suite.java:128)
	at org.junit.runners.Suite.runChild(Suite.java:27)
	at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
	at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
	at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
	at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
	at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:115)
	at org.junit.runner.JUnitCore.runMain(JUnitCore.java:77)
	at org.junit.runner.JUnitCore.main(JUnitCore.java:36)

FAILURES!!!
Tests run: 3,  Failures: 1

➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest
JUnit version 4.12
...E
Time: 0.009
There was 1 failure:
1) testMotorbikeCanStartEngine(VehicleTest)
org.junit.ComparisonFailure: expected:<Vrr[r]m!> but was:<Vrr[]m!>
	at org.junit.Assert.assertEquals(Assert.java:115)
	at org.junit.Assert.assertEquals(Assert.java:144)
	at VehicleTest.testMotorbikeCanStartEngine(VehicleTest.java:27)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:50)
	at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
	at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:47)
	at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
	at org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)
	at org.junit.runners.ParentRunner.runLeaf(ParentRunner.java:325)
	at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:78)
	at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:57)
	at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
	at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
	at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
	at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
	at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.junit.runners.Suite.runChild(Suite.java:128)
	at org.junit.runners.Suite.runChild(Suite.java:27)
	at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
	at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
	at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
	at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
	at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:115)
	at org.junit.runner.JUnitCore.runMain(JUnitCore.java:77)
	at org.junit.runner.JUnitCore.main(JUnitCore.java:36)

FAILURES!!!
Tests run: 3,  Failures: 1

➜  inheritance_start_point git:(master) ✗ javac *.java
^[[A%                                            ➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest
JUnit version 4.12
..
Time: 0.008

OK (2 tests)

➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest
JUnit version 4.12
...E
Time: 0.009
There was 1 failure:
1) testMotorbikeCanStartEngine(VehicleTest)
org.junit.ComparisonFailure: expected:<Vrr[r]m!> but was:<Vrr[]m!>
	at org.junit.Assert.assertEquals(Assert.java:115)
	at org.junit.Assert.assertEquals(Assert.java:144)
	at VehicleTest.testMotorbikeCanStartEngine(VehicleTest.java:27)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.junit.runners.model.FrameworkMethod$1.runReflectiveCall(FrameworkMethod.java:50)
	at org.junit.internal.runners.model.ReflectiveCallable.run(ReflectiveCallable.java:12)
	at org.junit.runners.model.FrameworkMethod.invokeExplosively(FrameworkMethod.java:47)
	at org.junit.internal.runners.statements.InvokeMethod.evaluate(InvokeMethod.java:17)
	at org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)
	at org.junit.runners.ParentRunner.runLeaf(ParentRunner.java:325)
	at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:78)
	at org.junit.runners.BlockJUnit4ClassRunner.runChild(BlockJUnit4ClassRunner.java:57)
	at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
	at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
	at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
	at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
	at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.junit.runners.Suite.runChild(Suite.java:128)
	at org.junit.runners.Suite.runChild(Suite.java:27)
	at org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)
	at org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)
	at org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)
	at org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)
	at org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)
	at org.junit.runners.ParentRunner.run(ParentRunner.java:363)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:137)
	at org.junit.runner.JUnitCore.run(JUnitCore.java:115)
	at org.junit.runner.JUnitCore.runMain(JUnitCore.java:77)
	at org.junit.runner.JUnitCore.main(JUnitCore.java:36)

FAILURES!!!
Tests run: 3,  Failures: 1

➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest
JUnit version 4.12
...
Time: 0.006

OK (3 tests)

➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest
JUnit version 4.12
...
Time: 0.007

OK (3 tests)

➜  inheritance_start_point git:(master) ✗ javac *.java
Motorbike.java:3: error: constructor Vehicle in class Vehicle cannot be applied to given types;
  public Motorbike(){
                    ^
  required: int
  found: no arguments
  reason: actual and formal argument lists differ in length
VehicleTest.java:11: error: constructor Car in class Car cannot be applied to given types;
    car = new Car();
          ^
  required: int
  found: no arguments
  reason: actual and formal argument lists differ in length
2 errors
➜  inheritance_start_point git:(master) ✗ javac *.java
Motorbike.java:4: error: cannot reference numWheels before supertype constructor has been called
    super(numWheels);
          ^
VehicleTest.java:11: error: constructor Car in class Car cannot be applied to given types;
    car = new Car();
          ^
  required: int
  found: no arguments
  reason: actual and formal argument lists differ in length
2 errors
➜  inheritance_start_point git:(master) ✗ javac *.java     
Motorbike.java:4: error: cannot reference numWheels before supertype constructor has been called
    super(numWheels);
          ^
VehicleTest.java:12: error: constructor Motorbike in class Motorbike cannot be applied to given types;
    motorbike = new Motorbike(2);
                ^
  required: no arguments
  found: int
  reason: actual and formal argument lists differ in length
2 errors
➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest
JUnit version 4.12
...
Time: 0.008

OK (3 tests)

➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ javac *.java
VehicleTest.java:14: error: Vehicle is abstract; cannot be instantiated
    vehicle = new Vehicle();
              ^
1 error
➜  inheritance_start_point git:(master) ✗ javac *.java
Car.java:1: error: Car is not abstract and does not override abstract method drive() in Vehicle
class Car extends Vehicle { //Car class inheritance from Vehicle
^
Motorbike.java:1: error: Motorbike is not abstract and does not override abstract method drive() in Vehicle
class Motorbike extends Vehicle {
^
VehicleTest.java:14: error: Vehicle is abstract; cannot be instantiated
    vehicle = new Vehicle();
              ^
3 errors
➜  inheritance_start_point git:(master) ✗ javac *.java
Car.java:1: error: Car is not abstract and does not override abstract method drive() in Vehicle
class Car extends Vehicle { //Car class inheritance from Vehicle
^
Motorbike.java:1: error: Motorbike is not abstract and does not override abstract method drive() in Vehicle
class Motorbike extends Vehicle {
^
2 errors
➜  inheritance_start_point git:(master) ✗ javac *.java
Car.java:1: error: Car is not abstract and does not override abstract method drive() in Vehicle
class Car extends Vehicle { //Car class inheritance from Vehicle
^
Motorbike.java:1: error: Motorbike is not abstract and does not override abstract method drive() in Vehicle
class Motorbike extends Vehicle {
^
2 errors
➜  inheritance_start_point git:(master) ✗ javac *.java
➜  inheritance_start_point git:(master) ✗ junit VehicleTest 
JUnit version 4.12
.....
Time: 0.007

OK (5 tests)

➜  inheritance_start_point git:(master) ✗ git add .
➜  inheritance_start_point git:(master) ✗ git commit -m "test 3 passed"
[master 11dedcf] test 3 passed
 8 files changed, 58 insertions(+), 12 deletions(-)
 rewrite inheritance_start_point/Car.class (100%)
 rewrite inheritance_start_point/Vehicle.class (100%)
 rewrite inheritance_start_point/VehicleTest.class (80%)
➜  inheritance_start_point git:(master) 
