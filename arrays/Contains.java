import java.util.Scanner;

class Contains {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int arr[]= new int[n];
        System.out.println("Enter elements:");
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.print("Enter value to check: ");
        int val = sc.nextInt();

       int foundIndex=-1;
       for(int i = 0; i < n; i++) {
           if(arr[i]==val){
               foundIndex=i;
               break;
           }
           if(foundIndex!=-1){
                System.out.print("Contains ");
    }
           else{
                 System.out.print("not contains ");
}
       }
        
