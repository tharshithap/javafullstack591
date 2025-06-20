class CSE {
    static int a = 10;
 int b = 20;

    static {
        System.out.println("CSE Static Block");
    }
    {
        System.out.println("CSE Instance Block");
    }

    static void add() {
     
        System.out.println("CSE add: " + (a ));
    }

    void sub() {
        System.out.println("CSE sub: " + (a - b));
    }
  
}

class ECE {
    static int b = 20;
         int a = 10;

    static {
        System.out.println("ECE Static Block");
    }
    {
        System.out.println("ECE Instance Block");
    }

    
void add() {
        System.out.println("ECE add: " + (a));
    }

    static void sub() {
       
        System.out.println("ECE sub: " + (b)); 
    }

    public static void main(String[] args) {
        CSE c1 = new CSE();
        ECE e1 = new ECE();
        c1.sub();
        c1.add(); 
        sub();
        e1.add();
    }
}
