"use client";

import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { CirclePlusIcon, Trash2Icon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { menuCategories, menuSizes, menuTypes } from "@/lib/menuData";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRef, useState } from "react";
import { MenuItemCardPreview } from "@/components/dashboard/MenuItemCard";
import { createMenuItem } from "@/lib/actions";

export default function AddMenuItemPage() {
  const [priceList, setPriceList] = useState([]);
  const [additionalList, setAdditionalList] = useState([]);
  const [previewData, setPreviewData] = useState({ name: "", description: "", category: "", prices: [], additionals: [] });

  // Form reference
  const itemForm = useRef(null);

  // Add price to priceList
  const addPrice = () => {
    const formData = new FormData(itemForm.current);

    const size = formData.get("itemSize");
    const type = formData.get("itemType");
    const price = formData.get("itemPrice");

    setPriceList([...priceList, { size, type, price }]);
    // add to previewData
    setPreviewData({ ...previewData, prices: [...previewData.prices, { size, type, price }] });
  };

  // Add additional to additionalList
  const addAdditional = () => {
    const formData = new FormData(itemForm.current);

    const name = formData.get("itemAddName");
    const price = formData.get("itemAddPrice");

    setAdditionalList([...additionalList, { name, price }]);
    // add to previewData
    setPreviewData({ ...previewData, additionals: [...previewData.additionals, { name, price }] });
  };

  // Form submission
  const onSubmit = (e) => {
    e.preventDefault();
    createMenuItem(previewData);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Header title="Add menu item" subtitle="This is where you can create a new menu item" />
      </div>

      {previewData.name && (
        <div className="mb-10">
          <Label>Preview</Label>
          <MenuItemCardPreview preview item={previewData} />
        </div>
      )}

      <form ref={itemForm} onSubmit={onSubmit} id="itemForm" name="itemForm" className="flex flex-col gap-3">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input
            placeholder="eg. The OG"
            name="itemName"
            onChange={(e) => setPreviewData({ ...previewData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>Short description</Label>
          <Input
            placeholder="eg. Classic milk tea"
            name="itemDescription"
            onChange={(e) => setPreviewData({ ...previewData, description: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <Select
            name="itemCategory"
            onValueChange={(value) => setPreviewData({ ...previewData, category: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose category" />
            </SelectTrigger>
            <SelectContent>
              {menuCategories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Prices</Label>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-2/6">Size</TableHead>
                <TableHead className="w-2/6">Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-end">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {priceList.map((price) => (
                <TableRow key={priceList.indexOf(price)}>
                  <TableHead>{price.size.toUpperCase()}</TableHead>
                  <TableHead>{price.type.toUpperCase()}</TableHead>
                  <TableHead>${price.price}</TableHead>
                  <TableHead className="text-end">
                    <Button
                      type="button"
                      onClick={() => setPriceList(priceList.filter((p) => p !== price))}
                      variant="destructive"
                    >
                      <Trash2Icon className="w-5 h-5" />
                    </Button>
                  </TableHead>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell>
                  <Select name="itemSize" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                      {menuSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select name="itemType">
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {menuTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    placeholder="$0.00"
                    step="0.01"
                    min={0.01}
                    max={999.99}
                    defaultValue={0.01}
                    name="itemPrice"
                  />
                </TableCell>
                <TableCell className="text-end">
                  <Button type="button" variant="dashboard" onClick={addPrice}>
                    <CirclePlusIcon className="w-5 h-5 mr-2" />
                    Add price
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <div className="space-y-2">
          <Label>Additionals</Label>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-2/6">Name</TableHead>
                <TableHead className="w-2/6">Price</TableHead>
                <TableHead className="text-end">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {additionalList.map((item) => (
                <TableRow key={additionalList.indexOf(item)}>
                  <TableHead>{item.name.toUpperCase()}</TableHead>
                  <TableHead>${item.price}</TableHead>
                  <TableHead className="text-end">
                    <Button
                      type="button"
                      onClick={() => setAdditionalList(additionalList.filter((i) => i !== item))}
                      variant="destructive"
                    >
                      <Trash2Icon className="w-5 h-5" />
                    </Button>
                  </TableHead>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell>
                  <Input placeholder="eg. Extra Toppings" name="itemAddName" />
                </TableCell>

                <TableCell>
                  <Input
                    type="number"
                    placeholder="$0.00"
                    step="0.01"
                    min={0.01}
                    max={999.99}
                    defaultValue={0.01}
                    name="itemAddPrice"
                  />
                </TableCell>
                <TableCell className="text-end">
                  <Button type="button" variant="dashboard" onClick={addAdditional}>
                    <CirclePlusIcon className="w-5 h-5 mr-2" />
                    Add price
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        <Button type="submit" variant="dashboard" className="w-full mt-10">
          Create menu item
        </Button>
      </form>
    </div>
  );
}
