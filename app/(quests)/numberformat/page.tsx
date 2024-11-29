
const number = 123456.789
const amount = 3500
const digits = 5.22

export const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
});

export const thb = new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 2
});

export default function page() {
    return (
        <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-6 border p-4 rounded-md">
                <div className="font-semibold">Currency Basic</div>
                <div className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">US dollar:</div>
                        <div>
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                                number,
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Japanese yen:</div>
                        <div>
                            {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
                                number,
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Thai bath:</div>
                        <div>
                            {new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(
                                number,
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6 border p-4 rounded-md">
                <div className="font-semibold">Currency Format</div>
                <div className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Name:</div>
                        <div>
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                currencyDisplay: "name",
                            }).format(amount)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Accounting:</div>
                        <div>
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                currencySign: "accounting",
                            }).format(amount)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6 border p-4 rounded-md">
                <div className="font-semibold">Decimal</div>
                <div className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Decimal:</div>
                        <div>
                            {new Intl.NumberFormat("en-US", {
                                style: "decimal",
                            }).format(amount)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Percent:</div>
                        <div>
                            {new Intl.NumberFormat("en-US", {
                                style: "percent",
                            }).format(amount)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6 border p-4 rounded-md">
                <div className="font-semibold">Unit</div>
                <div className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">L:</div>
                        <div>
                            {new Intl.NumberFormat("en-US", {
                                style: "unit",
                                unit: "liter",
                            }).format(amount)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Liters:</div>
                        <div>
                            {new Intl.NumberFormat("en-US", {
                                style: "unit",
                                unit: "liter",
                                unitDisplay: "long",
                            }).format(amount)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6 border p-4 rounded-md">
                <div className="font-semibold">Digits</div>
                <div className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">IntegerDigits:</div>
                        <div>
                            {new Intl.NumberFormat("en", {
                                minimumIntegerDigits: 3,
                            }).format(digits)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">FractionDigits:</div>
                        <div>
                            {new Intl.NumberFormat("en", {
                                minimumFractionDigits: 4,
                            }).format(digits)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">Integer & Fraction:</div>
                        <div>
                            {new Intl.NumberFormat("en", {
                                minimumIntegerDigits: 3,
                                minimumFractionDigits: 4,
                            }).format(digits)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6 border p-4 rounded-md">
                <div className="font-semibold">Rounding Mode</div>
                <div className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">ceil 2.23:</div>
                        <div>
                            {new Intl.NumberFormat("en", {
                                maximumSignificantDigits: 2,
                                roundingMode: 'ceil'
                            }).format(2.23)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">ceil 2.25:</div>
                        <div>
                            {new Intl.NumberFormat("en", {
                                maximumSignificantDigits: 2,
                                roundingMode: 'ceil'
                            }).format(2.25)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">floor 2.25:</div>
                        <div>
                            {new Intl.NumberFormat("en", {
                                maximumSignificantDigits: 2,
                                roundingMode: 'floor'
                            }).format(2.25)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-6 border p-4 rounded-md">
                <div className="font-semibold">Reuse Format</div>
                <div className="space-y-4">
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">thb.format(11.23)</div>
                        <div>
                            {thb.format(11.23)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">thb.format(11.25)</div>
                        <div>
                            {thb.format(11.25)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">usd.format(11.25)</div>
                        <div>
                            {usd.format(11.25)}
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="font-medium">usd.format(11.29)</div>
                        <div>
                            {usd.format(11.29)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

