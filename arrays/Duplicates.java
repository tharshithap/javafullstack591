import java.util.Scanner;

class Duplicates {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        int arr[] = new int[n];       
        System.out.println("Enter elements:");
        for(int i = 0; i < n; i++)
 {
            arr[i] = sc.nextInt();
        }      
        System.out.print("Duplicates: ");
        int count = 0;
        for(int i = 0; i < n; i++) 
{            for(int j = i + 1; j < n; j++)
 {                if(arr[i] == arr[j])
 {                  int alreadyPrinted = 0;
                    for(int k = 0; k < i; k++)
 {
                        if(arr[k] == arr[i]) 
{
                            alreadyPrinted = 1;
                            break;
                        }
                    }
                    if(alreadyPrinted == 0) {
                        System.out.print(arr[i] + " ");
                        count++;
                    }
                    break;
                }
            }
        }

      
        if(count == 0) {
            System.out.print("None");
        }
    }
}
