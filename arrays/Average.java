import java.util.Scanner;
class  Averages 
{
    public static void main(String[] args) 
{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int arr[] = new int[n];
        double sum = 0;
        System.out.println("Enter elements:");
        for(int i=0; i<n; i++)
 {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
         double avg = (sum/n);
        System.out.println("Average: " + avg);
    }
}
