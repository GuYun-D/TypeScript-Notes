function printID(id: number | string | boolean): void {
  // 使用联合类型需要小心
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(12)
printID("fdtegrt")
printID("fdtSHUD")