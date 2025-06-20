class staticandinstancevariables {
static int staticvar iable= 10;
int instancevariable = 20;
public static void main(String[] args) {
System.out.println("Static variable: " +  staticandinstancevariables.staticvariable);
staticandinstancevariables obj = new staticandinstancevariables();
System.out.println("Instance variable: " + obj.instancevariable);
}
}