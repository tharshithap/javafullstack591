import java.util.Scanner;
class CommonValues {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of first array: ");
        int n = sc.nextInt();
        int arr1[] = new int[n];
        System.out.println("Enter elements of first array:");
        for(int i=0; i<n; i++) 
{
arr1[i] = sc.nextInt();
}
        System.out.print("Enter size of second array: ");
        int m = sc.nextInt();
        int[] arr2 = new int[m];
        System.out.println("Enter elements of second array:");
        for(int i=0; i<m; i++)
{
 arr2[i] = sc.nextInt();
}
        System.out.print("Common values: ");
        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(arr1[i]==arr2[j]) {
                    System.out.print(arr1[i] + " ");
                    break;
                }
            }
        }
    }
}
