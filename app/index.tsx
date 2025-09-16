import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="mb-4 text-3xl font-bold text-red-800">Precis AI</Text>
      <Text className="text-center text-base text-gray-600">Ready to build your app</Text>
    </View>
  );
}
