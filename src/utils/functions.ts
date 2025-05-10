import moment from 'moment';

export function formatDate(date: Date, format = 'YYYY-MM-DD') {
  return moment(date).format(format);
}

export function getCurrentDate() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

export function getInputIdFormContext(
  mObject: any,
  way: string,
): any | undefined {
  const parts = way.split('.');
  let currentValue = mObject;

  for (const part of parts) {
    if (
      currentValue &&
      typeof currentValue === 'object' &&
      part in currentValue
    ) {
      currentValue = currentValue[part];
    } else {
      return undefined;
    }
  }

  return currentValue;
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getBrowserTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export function getValueByPercent(value: string, percentValue: string):number {
  return Number(((parseFloat(value) * parseFloat(percentValue)) / 100));
}

export function formatCryptoPrice(price: number): string {
  if(price == 0) return `${price}`;
  if (price >= 1) return price.toFixed(2);
  if (price >= 0.01) return price.toFixed(4);
  return price.toFixed(6);
}