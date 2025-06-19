import java.util.Scanner;

class MissingNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
System.out.println("Enter the size:");
        int n = sc.nextInt(); 
        int[] arr = new int[n];

        System.out.println("Enter numbers from 1 to 100:");

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
           
        }

       int j=0;
        System.out.println("Missing numbers b/w 1 to 100 in the array:");
        for(int i=1;i<100; i++){
            
            if(j<arr.length &&arr[j]==i)
            {
                j++;
    }
            else{
                System.out.print(i+  "");
}
}
}
}
