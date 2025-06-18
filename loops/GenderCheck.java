import java.util.Scanner;
public class GenderCheck {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
System.out.print("Enter gender (M/F): ");
char gender = sc.next().charAt(0);
switch (gender) {
case 'M':
case 'm':
System.out.println("Gender: Male");
break;
case 'F':
case 'f':
System.out.println("Gender: Female");
 break;
default:
System.out.println("Invalid input! Please enter M or F.");
 }
 }
}
Output:
Enter gender (M/F): f
Gender: Female