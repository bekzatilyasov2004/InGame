import React, { useState } from "react";
import { Checkbox, Radio, Pagination } from "antd";
import { Box, Button, Input, VStack, HStack, Select, Text, Grid, Image } from "@chakra-ui/react";
import { useStore } from "../store/UseStore";
import ProductCard from "../ui/ProductCard";

const ProductPage = () => {
  const { products, categories } = useStore();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(["", ""]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedMonitorSize, setSelectedMonitorSize] = useState([]);
  const [mouseType, setMouseType] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];

  let filteredProducts = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!priceRange[0] || product.price >= parseFloat(priceRange[0])) &&
      (!priceRange[1] || product.price <= parseFloat(priceRange[1])) &&
      (selectedBrand.length === 0 || selectedBrand.includes(product.brand)) &&
      (!selectedType || product.type === selectedType) &&
      (selectedMonitorSize.length === 0 || selectedMonitorSize.includes(product.monitorSize)) &&
      (!mouseType || product.type === mouseType)
    );
  });

  if (sortBy === "priceAsc") filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === "priceDesc") filteredProducts.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") filteredProducts.sort((a, b) => b.rating - a.rating);
  if (sortBy === "newest") filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sortBy === "oldest") filteredProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sortBy === "alphabetical") filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Box w="100%" minH="100vh" bg="#1A1A1A" p={4} color="white">
      <HStack align="start" spacing={4}>
        <Box w="25%" p={4}  color="white" top="10px" bg="transparent" shadow="lg" rounded="md">
          <Text fontSize="xl" fontWeight="bold">Filterlar</Text>
          <VStack align="start" spacing={3} mt={3}>
            <Text>Kategoriya</Text>
            {categories.map((category) => (
              <Checkbox
                key={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                {category}
              </Checkbox>
            ))}
            <Text>Narx</Text>
            <Input type="number" placeholder="Min" bg="gray.700" value={priceRange[0]} onChange={(e) => setPriceRange([e.target.value, priceRange[1]])} />
            <Input type="number" placeholder="Max" bg="gray.700" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], e.target.value])} />
            <Text>Brend</Text>
            <Checkbox.Group className="flex flex-col" value={selectedBrand} onChange={setSelectedBrand}>
              {uniqueBrands.map((brand) => (
                <Checkbox  key={brand} value={brand}>{brand}</Checkbox>
              ))}
            </Checkbox.Group>
            <Text>Monitor o‘lchami</Text>
            <Checkbox.Group value={selectedMonitorSize} onChange={setSelectedMonitorSize}>
              <Checkbox value="24">24 inch</Checkbox>
              <Checkbox value="27">27 inch</Checkbox>
              <Checkbox value="32">32 inch</Checkbox>
            </Checkbox.Group>
            <Text>Mishka turi</Text>
            <Radio.Group value={mouseType} onChange={setMouseType}>
              <Radio value="office">Ofis</Radio>
              <Radio value="gaming">Igravoy</Radio>
            </Radio.Group>
            <Text>Turi</Text>
            <Radio.Group value={selectedType} onChange={setSelectedType}>
              <Radio value="original">Original</Radio>
              <Radio value="official">Official</Radio>
            </Radio.Group>
            <Text>Saralash</Text>
            <Select bg="gray.700" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Standart</option>
              <option value="priceAsc">Narx bo‘yicha (Pastdan yuqoriga)</option>
              <option value="priceDesc">Narx bo‘yicha (Yuqoridan pastga)</option>
              <option value="rating">Reyting bo‘yicha</option>
              <option value="newest">Yangi mahsulotlar</option>
              <option value="oldest">Eski mahsulotlar</option>
              <option value="alphabetical">Alfavit bo‘yicha</option>
            </Select>
          </VStack>
        </Box>
        <Box w="75%" display="flex" flexDirection="column" alignItems="center">
          <Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {paginatedProducts.map((product, index) => (
             <ProductCard key={index} product={product} />
            ))}
          </Grid>
          <Box mt={4}>
            <Pagination current={currentPage} total={filteredProducts.length} pageSize={pageSize} onChange={setCurrentPage} />
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default ProductPage;
