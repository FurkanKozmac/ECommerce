import { Text } from "react-native";

export default function ProductListItem({ product }) {
  return <Text style={{ fontSize: 32 }}>{product.name}</Text>;
}
