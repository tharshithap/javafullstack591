class Instancemethodsinstaticmethods
{
int b=10;
void show()
{
System.out.println(b);
}
static void show1()
{
Instancemethodsinstaticmethods i=new Instancemethodsinstaticmethods();
i.show();
}
public static void main(String[]args)
{
show1();
}
}