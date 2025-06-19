import java.util.Scanner;

class SecondLargest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

      
        System.out.print("Enter size: ");
        int n = sc.nextInt();

       
        if(n < 2) {
            System.out.println("Array should have at least two elements.");
            return;
        }

        int arr[] = new int[n];

      
        System.out.println("Enter elements:");
        for(int i = 0; i < n; i++)
         {
            arr[i] = sc.nextInt();
        }

           int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;

      
        for(int i = 0; i < n; i++)
         {
            if(arr[i] > first) 
            {
                second = first;
                first = arr[i];
            } else if(arr[i] > second && arr[i] != first) {
                second = arr[i];
            }
        }

        
        if(second == Integer.MIN_VALUE) {
            System.out.println("No second largest element (all elements may be equal).");
        } else {
            System.out.println("Second largest: " + second);
        }
    }
}
