import { View } from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-primary mb-4 text-3xl font-bold">{{ APP_NAME }}</Text>
      <Text className="text-muted-foreground mb-6 text-center text-lg">
        Welcome to your new mobile app!
      </Text>
      <Text className="text-secondary-foreground bg-secondary mb-6 rounded-2xl p-4 text-center text-base">
        Built with Expo + Supabase + NativeWind + Shadcn/UI
      </Text>
      <Button variant="default" size="lg">
        <Text className="text-xl">Get Started</Text>
      </Button>
    </View>
  );
}
