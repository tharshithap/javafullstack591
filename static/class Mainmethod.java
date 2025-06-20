 class Mainmethod {
static void staticmethod() {
System.out.println("Static method");
}
void instancemethod() {
System.out.println("Instance method");
}
public static void main(String[] args) {
staticmethod();
Mainmethod obj = new Mainmethod();
obj.instancemethod();
}
}