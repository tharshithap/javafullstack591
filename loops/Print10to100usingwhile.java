class Print10to100usingwhile{
public static void main(String[] args) {
 int number = 10; 
System.out.println("Even numbers between 10 and 100:");
while (number <= 100) {
if (number % 2 == 0) {
System.out.print(number+" ");
}
number++;
}
}
} 
Output:10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100