class Oddorevenwithloops{
public static void main(String[] args) {
int i=10;
System.out.println("even numbers");
for(i=0;i<=10;i++)
{
if(i%2==0){
System.out.println(i);
}
}
System.out.println("odd Numbers "+i);
for(i=0;i<=10;i++)
{
if(i%2!=0){
System.out.println(i);
}
}
}
}
Output:
even numbers
0
2
4
6
8
10
odd Numbers 11
1
3
5
7
9