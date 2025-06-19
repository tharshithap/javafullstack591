import java.util.Scanner;
 class RemoveElement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter elements:");
        for(int i=0; i<n; i++)
{
 arr[i] = sc.nextInt();
}
        System.out.print("Enter value to remove: ");
        int val = sc.nextInt();
        System.out.print("Array after removal: ");
        for(int i=0; i<n; i++) 
if(arr[i]!=val) 
{
System.out.print(arr[i]+" ");
}
    }
}
