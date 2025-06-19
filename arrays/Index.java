import java.util.Scanner;
 class Index
 {
    public static void main(String[] args) 
{
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter elements:");
        for(int i=0; i<n; i++) 
{
arr[i] = sc.nextInt();
}
        System.out.print("Enter value to find: ");
        int val = sc.nextInt();
        int index = -1;
        for(int i=0; i<n; i++) 
if(arr[i]==val)
 { 
index = i; 
break; 
}
        System.out.println("Index: " + index);
    }
}
