import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const formatDuration = (minutes: number): string => {
    return dayjs
        .duration(minutes, 'minutes')
        .format('H[h] mm[m]');
};

export const formatDate = (date: string, format: string): string => {
    return dayjs(date).format(format);
}
