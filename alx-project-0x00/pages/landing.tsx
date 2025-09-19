import Button from "@/components/Button"
// import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Landing Page Buttons</h1>

      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small Rounded-SM" styles="text-sm rounded-sm" />
        <Button title="Small Rounded-MD" styles="text-sm rounded-md" />
        <Button title="Small Rounded-Full" styles="text-sm rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium Rounded-SM" styles="text-base rounded-sm" />
        <Button title="Medium Rounded-MD" styles="text-base rounded-md" />
        <Button title="Medium Rounded-Full" styles="text-base rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large Rounded-SM" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large Rounded-MD" styles="text-lg rounded-md px-6 py-3" />
        <Button
          title="Large Rounded-Full"
          styles="text-lg rounded-full px-6 py-3"
        />
      </div>
    </div>
  )
}
export default Landing