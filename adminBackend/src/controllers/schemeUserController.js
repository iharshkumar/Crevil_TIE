import Scheme from '../models/Scheme.js';
export const getPublishedSchemes = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = { isPublished: true };

    if (category) {
      query.category = category;
    }
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }
    const schemes = await Scheme.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: schemes.length, data: schemes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const checkEligibility = async (req, res) => {
  try {
    const { age, gender, income, category, occupation, state } = req.body;
    const allSchemes = await Scheme.find({ isPublished: true });
    const eligibleSchemes = allSchemes.filter(scheme => {
      const criteria = scheme.eligibilityCriteria;
      if (!criteria) return true;
      if (age && (age < criteria.minAge || age > criteria.maxAge)) return false;
      if (income && criteria.maxIncomeLimit && income > criteria.maxIncomeLimit) return false;
      if (gender && criteria.genderAllowed && criteria.genderAllowed.length > 0) {
        if (!criteria.genderAllowed.includes('all') && !criteria.genderAllowed.includes(gender.toLowerCase())) {
          return false;
        }
      }
      if (state && criteria.residenceState && criteria.residenceState !== 'All' && criteria.residenceState !== state) {
        return false;
      }
      return true;
    });
    res.status(200).json({
      success: true,
      totalChecked: allSchemes.length,
      eligibleCount: eligibleSchemes.length,
      data: eligibleSchemes
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
