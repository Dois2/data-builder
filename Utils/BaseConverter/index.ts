import {ObjectStack} from '../../Stack/ObjectStack';

export function baseConverter(decimalNumber: number, baseToUse: number) {
  const baseStack = new ObjectStack<number>();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUWXYZ'
  let number = decimalNumber;
  let rem;
  let baseString = '';
  if(!(baseToUse >= 2 || baseToUse <= 36)) return ''

  while(number > 0){
    rem = Math.floor(number % baseToUse);
    baseStack.push(rem);
    number = Math.floor(number / baseToUse);
  }

  while(!baseStack.isEmpty()){
    baseString += digits[baseStack.pop() as number];
  }
  return baseString
}