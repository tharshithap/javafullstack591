class Staticmethodsininstancemethods {
static int b=10;
static void display() {
System.out.println("static method");
System.out.println(b);
}
void display1() {
System.out.println("in instance method");
display();
Staticmethodsininstancemethods.display();
}
public static void main(String[] args) {
Staticmethodsininstancemethods s=new Staticmethodsininstancemethods();
s.display1();
}
}