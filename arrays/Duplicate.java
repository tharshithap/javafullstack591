import java.util.Scanner;
 class Duplicates {
    public static void main(String[] args) 
{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int  arr[] = new int[n];
        System.out.println("Enter elements:");
        for(int i=0; i<n; i++) 
{
arr[i] = sc.nextInt();
}
        System.out.print("Duplicates: ");
        boolean found = false;
        for(int i=0; i<n; i++) {
            for(int j=i+1; j<n; j++) {
                if(arr[i]==arr[j]) {
                    System.out.print(arr[i] + " ");
                    found = true;
                    break;
                }
            }
        }
        if(!found) System.out.print("None");
    }
}
