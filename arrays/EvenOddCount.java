import java.util.Scanner;
 class EvenOddCount 
{
    public static void main(String[] args) 
{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter elements:");
        int even = 0, odd = 0;
        for(int i=0; i<n; i++) 
{
            arr[i] = sc.nextInt();

            if(arr[i]%2==0) 
{
even++;
}
            else {
odd++;
}
}
        System.out.println("Even: " + even + ", Odd: " + odd);
    }
}