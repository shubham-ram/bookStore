import formatAmount from "@/packages/utils/formatAmount";

const getFormattedAmt = ({ amount = 0 })=>{
    return formatAmount({
        amount: amount,
        options : {
			notation : 'standard',
			style    : 'currency',
		},
    })
}
export default getFormattedAmt;