public class LargestNumberIfElse {
public static void main(String[] args) {
 int a = 10, b = 20, c = 30;
int largest;
if (a >= b && a >= c) {
largest = a;
} else if (b >= a && b >= c) {
largest = b;
} else {
largest = c;
 }
System.out.println("Largest number is: " + largest);
    }
}
Output:
Largest number is: 30