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

       boolean found = false;
        for(int i = 0; i < n; i++) {
            if(arr[i] == val) {
                found = true;
                break;
            }
        }

        if(found) {
            System.out.println("Contains: " + val);
        } else {
            System.out.println("Does not contain: " + val);
        }
    }
}
