#include"helperfile.c"

int main(int argc, char* argv[])
{
  int iNum1 = 0, iNum2 = 0, iAns = 0, iChoice = 0;
  
  
      printf("\nENTER 1st NUMBER  : ");
      scanf("%d", &iNum1);

      printf("\nENTER 2nd NUMBER : ");
      scanf("%d", &iNum2);

      printf("\n1.Addition \n2.Subtraction \n3.Multiplication \n4.Division  \n5.Exit\n");
	while(1)
	{
      printf("\nENTER CHOICE : ");
	
      scanf("%d", &iChoice);

      switch(iChoice)
	{
	case 1:
	  printf("\nAddition is  %d \n",Addition(iNum1, iNum2));
	  break;

	case 2:
	  printf("\nSubtraction is  %d \n", Subtraction(iNum1, iNum2));
	  break;

	case 3:
	  printf("\nMultiplication is  %d \n",Multiplication(iNum1, iNum2));
	  break;

	case 4:
	  printf("\nDivision is  %f \n", Division(iNum1, iNum2));
	  break;

	case 5:
	  exit(0);

	default:
	  printf("\nENTER CORRECT CHOICE...!!!");
	  break;
	}
    }
  return 0;
}
